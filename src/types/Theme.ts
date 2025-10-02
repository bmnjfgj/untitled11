export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
    fontSize: number;
    borderRadius: number;
    borderStyle: string;
    borderWidth: number;
    borderColor: string;
}

export const defaultTheme: Theme = {
    primaryColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
    backgroundColor: '#ffffff',
    textColor: '#1f2937',
    fontSize: 16,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#d1d5db',
};