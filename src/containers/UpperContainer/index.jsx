import React from 'react'
import { ClassComponent } from '../../components/ClassComponent';
import { CreateElementComponent } from '../../components/CreateElementComponent';
import { FunctionalComponent } from '../../components/FunctionalComponent';
import MyPureComponent from '../../components/MyPureComponent';
import './index.css'

export const UpperContainer = () => {
    return (
        <div className="container">
            <FunctionalComponent />
            <MyPureComponent />
            <ClassComponent />
            <CreateElementComponent />
        </div>
    )
}

