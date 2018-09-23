/* stylelint-disable no-descending-specificity */
import { css as emotion_css } from 'emotion'
import Vars from '../utilities/vars'
import { BaseWithConsumer } from '../base/Class'
import { block, unselectable } from '../utilities/mixins'
import Icon from '../elements/Icon'


Vars.addDerivedDefault(vars => ({
  'breadcrumb-item-color': vars['link'],
  'breadcrumb-item-hover-color': vars['link-hover'],
  'breadcrumb-item-active-color': vars['text-strong'],

  'breadcrumb-item-padding-vertical': 0,
  'breadcrumb-item-padding-horizontal': '0.75em',

  'breadcrumb-item-separator-color': vars['grey-light'],
}))

export default class Breadcrumb extends BaseWithConsumer {
  static defaultProps = {
    as: 'nav',
  }

  static Style = theme => emotion_css`
    ${block}
    ${unselectable}
    font-size: ${theme['size-normal']};
    white-space: nowrap;
    a {
      align-items: center;
      color: ${theme['breadcrumb-item-color']};
      display: flex;
      justify-content: center;
      padding: ${theme['breadcrumb-item-padding-vertical']} ${theme['breadcrumb-item-padding-horizontal']};
      &:hover {
        color: ${theme['breadcrumb-item-hover-color']};
      }
    }
    li {
      align-items: center;
      display: flex;
      &:first-child a {
        padding-left: 0;
      }
      &.is-active {
        a {
          color: ${theme['breadcrumb-item-active-color']};
          cursor: default;
          pointer-events: none;
        }
      }
      & + li::before {
        color: ${theme['breadcrumb-item-separator-color']};
        content: "\u002f";
      }
    }
    ul,
    ol {
      align-items: flex-start;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .${/* sc-custom "icon" */Icon.name}:first-child {
      margin-right: 0.5em;
    }
    .${/* sc-custom "icon" */Icon.name}:last-child {
      margin-left: 0.5em;
    }
    /* Alignment */
    &.is-centered {
      ol,
      ul {
        justify-content: center;
      }
    }
    &.is-right {
      ol,
      ul {
        justify-content: flex-end;
      }
    }
    /* Sizes */
    &.is-small {
      font-size: ${theme['size-small']};
    }
    &.is-medium {
      font-size: ${theme['size-medium']};
    }
    &.is-large {
      font-size: ${theme['size-large']};
    }
    /* Styles */
    &.has-arrow-separator {
      li + li::before {
        content: "\u2192";
      }
    }
    &.has-bullet-separator {
      li + li::before {
        content: "\u2022";
      }
    }
    &.has-dot-separator {
      li + li::before {
        content: "\u00b7";
      }
    }
    &.has-succeeds-separator {
      li + li::before {
        content: "\u227B";
      }
    }
  `
}