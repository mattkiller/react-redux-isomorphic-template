import React from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { parse } from 'qs';

export default function syncComponent(chunkName, mod)
{
    const Component = mod.default ? mod.default : mod; // es6 module compat

    function SyncComponent(props)
    {
        const propsAddQuery = update(props, {
            location: {
                query: { $set: parse(props.location.search.replace('?', '')) }
            }
        });

        return <Component {...propsAddQuery} />;
    }

    SyncComponent.defaultProps = {
        location: {}
    };

    SyncComponent.propTypes = {
        location: PropTypes.object
    };

    return SyncComponent;
}
