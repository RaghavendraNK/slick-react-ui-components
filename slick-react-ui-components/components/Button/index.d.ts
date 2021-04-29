/**
 * * dense: height of the button, its a optional one, by default 32 will be the height of the button
 * * disabled: boolean which will be used to disable or enable button
 * * id: a unique string used as id
 * * label: string, used to display the string on the label
 * * onClick: evenvt to call back the parent functionality on click of a button
 * * startIcon: is the JSX.Element which is optional to show the button with icon if any passed
 * * type: type of the button can be submit, button and reset
 * * variant: different forms/look for the button based on the variant.
 */
export interface Props {
    dense?: 32 | 40 | 48;
    disabled?: boolean;
    id: string;
    label: string;
    onClick?: () => void;
    startIcon?: JSX.Element;
    type?: 'button' | 'submit' | 'reset' | undefined;
    variant: 'filled' | 'outlined' | 'text' | 'social-button' | 'link';
}
export declare const Button: ({ variant, label, startIcon, dense, onClick, ...props }: Props) => JSX.Element;
export default Button;
