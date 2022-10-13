export interface FormField {
    name: string;
    formControlName: string; 
    
}

export interface ITC {
    id: string;
    externalId: string;
    type: string;
    name: string;
    description: string;
    version: string;
    edition: string;
    product_family: string;
    tbm_category: string;
}

export interface Search {
    id: string;
    type: string; 
    name: string;
}