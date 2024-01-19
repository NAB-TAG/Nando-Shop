import React from "react";
import { HerosCustomHelpers } from "../helpers/HerosCustomHelpers";

interface HeroFactoryInterface{
    createHero(type: string, props: HerosCustomHelpers.SimplePropsHelper): React.ReactNode | null;
    createHero(type: string, props: HerosCustomHelpers.SimpleDescriptionPropsHelper): React.ReactNode | null;
    createHero(type: string, props: HerosCustomHelpers.LoginPropshelper): React.ReactNode | null;
}

const HeroFactory: HeroFactoryInterface = {
    createHero(type, props){
        switch (type) {
            case 'simple':
                return <HerosCustomHelpers.simple {...props as HerosCustomHelpers.SimplePropsHelper} />;
                break;
            case 'simple-description':
                return <HerosCustomHelpers.simpleDescription {...props as HerosCustomHelpers.SimpleDescriptionPropsHelper} />;
                break;
            case 'login':
                return <HerosCustomHelpers.login {...props as HerosCustomHelpers.LoginPropshelper} />;
                break;  
            default:
                return null
                break;
        }
    }
}

export default HeroFactory