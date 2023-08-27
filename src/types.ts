export interface IResult {
    artistName: string
    artworkUrl30: string
    artworkUrl60: string
    artworkUrl100:string
    collectionArtistId:number
    collectionArtistViewUrl:string
    collectionCensoredName: string
    collectionExplicitness: string
    collectionHdPrice: number
    collectionId: number
    collectionName: string
    collectionPrice: number
    collectionViewUrl: string
    contentAdvisoryRating: string
    country: string
    currency: string
    hasITunesExtras: boolean
    kind: string
    longDescription: string
    previewUrl: string
    primaryGenreName: string
    releaseDate: string
    trackCensoredName: string
    trackCount: number
    trackExplicitness: string
    trackHdPrice: number
    trackHdRentalPrice: number
    trackId: number
    trackName: string
    trackNumber: number
    trackPrice: number
    trackRentalPrice: number
    trackTimeMillis: number
    trackViewUrl: string
    wrapperType: string
}

export interface IResponse {
    resultCount: number,
    results: IResult[]
}
