import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import { BackButton, Button, Icon, Page, Toolbar, ToolbarButton } from 'react-onsenui'
import { List, ListItem, Switch } from 'react-onsenui'

import React from 'react'
import TestStore from '../Store/TestStore'
import { observer } from 'mobx-react'
import ons from 'onsenui'


const addCount = () => {
    TestStore.addCount()
    ons.notification.alert(`Hello world count with ${TestStore.count}!`)
}

const renderRow = (row) => {
    return (
        <ListItem key={row.title} tappable onClick={row.fn}>
            {row.title}
        </ListItem>
    )
}

const Test = () => {
    const items = [
        {
            title: `${TestStore.count}`,
            fn: () => null
        },
        {
            title: 'Alert notification',
            fn: () => ons.notification.alert('An error has occurred!')
        },
        {
            title: 'Confirmation',
            fn: () => ons.notification.confirm('Are you ready?')
        },
        {
            title: 'Prompt',
            fn: () => ons.notification.prompt('What\'s your name?')
        }
    ]
    
    return (
        <Page renderToolbar={() =>
            <Toolbar>
                <div className="left">
                    <BackButton>Back</BackButton>
                </div>
                <div className="center">Count</div>
                <div className="right">
                    <ToolbarButton>
                        <Icon icon="md-menu" />
                    </ToolbarButton>
                </div>
            </Toolbar>}
        >
            <List dataSource={items} renderRow={renderRow} />
            <Button onClick={addCount}>Click me!</Button>
        </Page>
    )
}

export default observer(Test)