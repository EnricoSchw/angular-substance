export interface Dar {
    version: string | number;
    diff?: Diff[];
    resources: {
        'manifest.xml': DarResource;
        'manuscript.xml'?: DarResource;
        [assetPath: string]: DarAssetResource;
    }
}

export interface DarResource {
    id?: string;
    path?: string;
    encoding?: string;
    size?: number;
    createdAt?: number;
    updatedAt?: number;
    data?: string;
}

export interface DarAssetResource extends DarResource {
    assetId?: string | number;
}

export interface Diff {
    'docId': string;
    'change': any;
}
