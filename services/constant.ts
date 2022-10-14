export const API_KEY = "8WBLXiczijwpdDaL5oT28nWImgbxnNQo"
export const API_URL = "https://api.nytimes.com/svc/mostpopular/v2/"

export interface ModelOutput{
    results : [
        {
            "uri": string,
            "url": string,
            "id": number,
            "asset_id": number,
            "source": string,
            "published_date": string,
            "updated": string,
            "section": string,
            "subsection": string,
            "nytdsection": string,
            "adx_keywords": string,
            "column": null,
            "byline": string,
            "type": string,
            "title": string,
            "abstract": string,
            "des_facet": any,
            "org_facet": any,
            "per_facet": any,
            "geo_facet": any,
            "media": any,
            "eta_id": number
        }
    ],
    
}

export interface Email{
    readonly type: 'EMAIL';
    payload : ModelOutput[];
}
export interface Shared{
    readonly type: 'SHARED';
    payload : ModelOutput[];
}
export interface Viewed{
    readonly type: 'VIEWED';
    payload : ModelOutput[];
}

export type OutputAction = Email | Shared | Viewed