import { useCallback, useEffect, useState } from "react";
import { Input } from "./Input";
import { DropdownList } from "./DropdownList";
import axios from "axios";
import { IResponse, IResult } from "../types";
import {useDebounce} from "../utils/hooks";

const defaultItems = ['A', 'B', 'C', 'D', 'E']

export const Search = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [foundSongs, setFoundSongs] = useState<IResult[]>([]);
    const [activeList, setActiveList] = useState<string[]>(defaultItems);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const debouncedValue = useDebounce<string>(inputValue, 1000)

    const getNewList = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get('https://itunes.apple.com/search', {
                params: {
                    term: debouncedValue
                }
            });
            const data: IResponse = response.data;
            const songs = data.results.filter(a => !!a.collectionName).sort((a, b) => {
                const collectionNameA = a.collectionName.toLowerCase();
                const collectionNameB = b.collectionName.toLowerCase();

                if (collectionNameA < collectionNameB) {
                    return -1;
                }
                if (collectionNameA > collectionNameB) {
                    return 1;
                }
                return 0;
            })
            const firstFiveFilteredSongs = songs.length === 0 ? [] : songs.length > 5 ? songs.slice(0, 5) : songs
            setFoundSongs(firstFiveFilteredSongs)
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    const rotateAlbums = useCallback(() => {
        if (foundSongs.length === 0) {
            setActiveList(prevList => {
                const newActiveList = [...prevList];
                newActiveList.shift();
                newActiveList.push(defaultItems[currentIndex]);
                return newActiveList;
            });
        } else {
            setActiveList(prevList => {
                const newActiveList = [...prevList];
                const newItem = foundSongs[currentIndex] ? foundSongs[currentIndex].collectionName : defaultItems[currentIndex];
                newActiveList.shift();
                newActiveList.push(newItem);
                return newActiveList;
            });
        }
        setCurrentIndex(prevIndex => (prevIndex < 4) ? prevIndex + 1 : 0);
    }, [currentIndex, foundSongs]);

    const handleChange = (newValue: string) => {
        if (error) {
            setError(false);
        }
        setInputValue(newValue);
    }

    useEffect(() => {
        if (error) {
            setFoundSongs([])
            setCurrentIndex(0)
        }
    }, [error])

    useEffect(() => {
        if (debouncedValue.trim().length > 0) {
            getNewList().then(() => setCurrentIndex(0))
        } else if (!!foundSongs.length && debouncedValue.trim().length === 0) {
            setFoundSongs([]);
            setCurrentIndex(0);
        }
    }, [debouncedValue]);

    useEffect(() => {
        if (!isLoading) {
            const interval = setInterval(rotateAlbums, 1000);
            return () => clearInterval(interval);
        }
    }, [currentIndex, isLoading, rotateAlbums]);

    return (
        <div className='wrapper'>
            <Input value={inputValue} setValue={handleChange} />
            <DropdownList itemsList={activeList} isErrorExist={error} />
        </div>
    )
}
