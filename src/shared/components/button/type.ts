import { ReactNode, CSSProperties } from "react";

export interface IButton {
    type?: 'fullfield' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | string;
    label: string;
    icon?: ReactNode;
    style?: CSSProperties
    onClick: (event: MouseEvent | any) => void
}