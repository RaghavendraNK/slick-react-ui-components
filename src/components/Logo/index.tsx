import React from 'react';
import LogoIcon from '../../assets/icons/Logo.svg';
import LogoTitle from '../../assets/icons/LogoTitle.svg';
export interface Props {
    isLogoWithTitle?: boolean;
    width: number;
    height: number;
    logoIcon?: string | undefined;
    logoTitle?: string | undefined;
}

export const Logo = (props: Props): JSX.Element => {
    const {
        isLogoWithTitle = false,
        width,
        height,
        logoIcon = LogoIcon,
        logoTitle = LogoTitle,
    } = props;
    return (
        <div id='RRUCLogo'>
            {!isLogoWithTitle && (
                <img width={width} height={height} alt='small-logo' src={logoIcon} />
            )}
            {isLogoWithTitle && (
                <img width={width} height={height} alt='small-logo' src={logoTitle} />
            )}
        </div>
    );
};

export default Logo;
