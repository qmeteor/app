/**
 * Created by Bien on 2017-05-17.
 */
import React from 'react'

import PrivateHeader from './PrivateHeader';
import MainContents from './MainContent';

export default () => {
        return (
            <div>
                <PrivateHeader title="Beanster"/>
                <div className="page-content">
                    <MainContents/>
                </div>
            </div>
        );
};