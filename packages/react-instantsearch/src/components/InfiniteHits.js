import PropTypes from 'prop-types';
import React, { Component } from 'react';

import BaseWidget from './BaseWidget';
import classNames from './classNames.js';
import translatable from '../core/translatable';

const widgetClassName = 'InfiniteResults';
const cx = classNames(widgetClassName);

class InfiniteHits extends Component {
  render() {
    const {
      hitComponent: ItemComponent,
      hits,
      hasMore,
      refine,
      translate,
      header,
      footer,
    } = this.props;
    const renderedHits = hits.map(hit => (
      <ItemComponent key={hit.objectID} hit={hit} />
    ));
    const loadMoreButton = hasMore ? (
      <button {...cx(['loadMore'])} onClick={() => refine()}>
        {translate('loadMore')}
      </button>
    ) : (
      <button {...cx(['loadMore', 'loadMore--disabled'])} disabled>
        {translate('loadMore')}
      </button>
    );

    return (
      <BaseWidget
        widgetClassName={widgetClassName}
        header={header}
        footer={footer}
      >
        <ul {...cx(['list'])}>{renderedHits}</ul>
        {loadMoreButton}
      </BaseWidget>
    );
  }
}

InfiniteHits.propTypes = {
  hits: PropTypes.array,
  hitComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
  hasMore: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
};

/* eslint-disable react/display-name */
InfiniteHits.defaultProps = {
  hitComponent: hit => (
    <li
      {...cx(['item'])}
      style={{
        borderBottom: '1px solid #bbb',
        paddingBottom: '5px',
        marginBottom: '5px',
      }}
    >
      {JSON.stringify(hit).slice(0, 100)}...
    </li>
  ),
};
/* eslint-enable react/display-name */

export default translatable({
  loadMore: 'Load more',
})(InfiniteHits);