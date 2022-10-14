export interface ImagesFetched {
    results?: Array<ImageFetched>
}

export interface ImageFetched {
    height?: number,
    width?: number,
    urls?: {
        full: string,
        raw: string,
        regular: string,
        small: string,
        small_s3: string,
        thumb: string,
    }
}