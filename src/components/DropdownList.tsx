interface IProps {
    itemsList: string[]
    isErrorExist: boolean
}

export const DropdownList = ({ itemsList, isErrorExist }: IProps) => {
    return (
        <div className='dropdown'>
            {isErrorExist ? <div className='error'>Ooops... Something went wrong...</div> : !!itemsList.length &&
                itemsList.map((item: string, index: number) => (
                    <div className='dropdown-item' key={`${item}_${index}`}>{item}</div>
                )) }
        </div>
    )
}
