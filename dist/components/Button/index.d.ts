export interface Props {
    dense?: 32 | 40 | 48;
    disabled?: boolean;
    id: string;
    label: string;
    onClick?: () => void;
    startIcon?: JSX.Element;
    type?: 'button' | 'submit' | 'reset' | undefined;
    variant: 'filled' | 'outlined' | 'text' | 'icon' | 'link';
}
export declare const Button: ({ variant, label, startIcon, dense, onClick, ...props }: Props) => JSX.Element;
export default Button;
