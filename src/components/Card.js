/* stylelint-disable no-descending-specificity */
import { css as emotion_css } from 'emotion'
import { rgba } from 'polished'
import Vars from '../utilities/vars'
import { BaseWithConsumer, Base } from '../base/Class'
import { Media } from '../layout/Media'

Vars.addDerivedDefault(vars => ({
  'card-color': vars['text'],
  'card-background-color': vars['white'],
  'card-shadow': `0 2px 3px ${rgba(vars['black'], 0.1)}, 0 0 0 1px ${rgba(vars['black'], 0.1)}`,

  'card-header-background-color': 'transparent',
  'card-header-color': vars['text-strong'],
  'card-header-shadow': `0 1px 2px ${rgba(vars['black'], 0.1)}`,
  'card-header-weight': vars['weight-bold'],

  'card-content-background-color': 'transparent',

  'card-footer-background-color': 'transparent',
  'card-footer-border-top': `1px solid ${vars['border']}`,
}))

export default class Card extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => emotion_css`
    background-color: ${theme['card-background-color']};
    box-shadow: ${theme['card-shadow']};
    color: ${theme['card-color']};
    max-width: 100%;
    position: relative;
   .${/* sc-custom '.media' */Media.name}:not(:last-child) {
      margin-bottom: 0.75rem
    }
  `
}


export class CardHeader extends BaseWithConsumer {
  static defaultProps = {
    as: 'header',
  }

  static Style = theme => emotion_css`
    background-color: ${theme['card-header-background-color']};
    align-items: stretch;
    box-shadow: ${theme['card-header-shadow']};
    display: flex;
  `
}
Card.Header = CardHeader


export class CardHeaderTitle extends BaseWithConsumer {
  static defaultProps = {
    as: 'p',
  }

  static Style = theme => emotion_css`
    align-items: center;
    color: ${theme['card-header-color']};
    display: flex;
    flex-grow: 1;
    font-weight: ${theme['card-header-weight']};
    padding: 0.75rem;
    &.is-centered {
      justify-content: center;
    }
  `
}
Card.Header.Title = CardHeaderTitle


export class CardHeaderIcon extends Base {
  static defaultProps = {
    as: 'div',
  }

  static Style = () => emotion_css`
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 0.75rem;
  `
}
Card.Header.Icon = CardHeaderIcon


export class CardImage extends Base {
  static defaultProps = {
    as: 'div',
  }

  static Style = () => emotion_css`
    display: block;
    position: relative;
  `
}
Card.Image = CardImage


export class CardContent extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => emotion_css`
    background-color: ${theme['card-content-background-color']};
    padding: 1.5rem;
  `
}
Card.Content = CardContent


export class CardFooter extends BaseWithConsumer {
  static defaultProps = {
    as: 'footer',
  }

  static Style = theme => emotion_css`
    background-color: ${theme['card-footer-background-color']};
    border-top: ${theme['card-footer-border-top']};
    align-items: stretch;
    display: flex;
  `
}
Card.Footer = CardFooter


export class CardFooterItem extends BaseWithConsumer {
  static defaultProps = {
    as: 'span',
  }

  static Style = theme => emotion_css`
    align-items: center;
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
    padding: 0.75rem;
    &:not(:last-child) {
      border-right: ${theme['card-footer-border-top']};
    }
  `
}
Card.Footer.Item = CardFooterItem