/* stylelint-disable no-descending-specificity */
import React from 'react'
import { css as emotion_css } from 'emotion'
import { Consumer } from '../base'
import Vars from '../utilities/vars'
import { block } from '../utilities/mixins'
import Button from './Button'
import Delete from './Delete'
import Title from './Title'
import Subtitle from './Subtitle'
import Content from './Content'
import { DropdownItem } from '../components/Dropdown'

Vars.addDerivedDefault(vars => ({
  'notification-background-color': vars['background'],
  'notification-radius': vars['radius'],
  'notification-padding': '1.25rem 2.5rem 1.25rem 1.5rem',
}))

const colorClasses = theme => Object.entries(theme.colors).reduce((acc, [name, [color, color_invert]]) => emotion_css`
  ${acc}
  &.is-${name} {
    background-color: ${color};
    color: ${color_invert};
  }
`, '')

const NotificationStyle = theme => emotion_css`
  ${block}
  background-color: ${theme['notification-background-color']};
  border-radius: ${theme['notification-radius']};
  padding: ${theme['notification-padding']};
  position: relative;
  a:not(.${Button.name}):not(.${DropdownItem.name}) { /* stylelint-disable-line */
    color: currentColor;
    text-decoration: underline;
  }
  strong {
    color: currentColor;
  }
  code,
  pre {
    background: ${theme['white']};
  }
  pre code {
    background: transparent;
  }
  & > .${Delete.name} { /* stylelint-disable-line */
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
  }
  .${/* sc-custom '.title' */Title.name},
  .${/* sc-custom '.subtitle' */Subtitle.name},
  .${/* sc-custom '.content' */Content.name} {
    color: currentColor;
  }
  ${colorClasses(theme)}
`
export default class Notification extends React.PureComponent {
  static defaultProps = {
    as: 'div',
    className: '',
  }

  render() {
    const { as, className, ...props } = this.props
    return (
      <Consumer>
        {({ theme }) => React.createElement(as, {
          ...props,
          className: [
            Notification.name,
            NotificationStyle(theme, as),
            className,
          ].join(' '),
        })}
      </Consumer>
    )
  }
}
