import React, { Component } from 'react'

export default class BundleImport extends Component {
    constructor(props,context){
        super(props,context)
        this.state = {
            mod: null
        }
    }
    componentWillMount() {
        this.load(this.props)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }
    load(props) {
        this.setState({
            mod: null
        })
        props.load().then((mod) => {
            this.setState({
                mod: mod.default ? mod.default : mod
            })
        })
    }
    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null
    }
}