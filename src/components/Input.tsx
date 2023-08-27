import {ChangeEvent} from "react";

interface IProps {
    value: string
    setValue: (newValue: string) => void
}

export const Input = ({ value, setValue }: IProps) => {
    return (
        <input className='input' value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} type='text' />
    )
}
