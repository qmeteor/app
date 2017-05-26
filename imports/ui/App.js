/**
 * Created by Bien on 2017-05-17.
 */
import React from 'react'

import PrivateHeader from './PrivateHeader';

export default () => {
        return (
            <div>
                <PrivateHeader title="Beanster"/>
                <div className="page-content">
                    Body Content
                </div>
            </div>
        );
};