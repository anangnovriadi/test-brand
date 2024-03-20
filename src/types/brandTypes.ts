export interface BrandRequest {
    name: string;
    description?: string;
}

export interface BrandPermissionRequest {
    userId?: number;
    brandId?: number;
    action?: string;
}
