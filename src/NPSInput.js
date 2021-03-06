import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NPSScale from './NPSScale';

/**
 * Promp the current user for its NPM score.
 * @param {ReactClass}
 */
class NPSInput extends React.Component {

  state = {
    dismissed: false,
    score: this.props.score || null,
  }

  /**
   * User clicked on a value.
   */
  onSubmit = (score) => {
    const { onSubmit } = this.props;
    this.setState({
      score
    }, () => {
      onSubmit({ score });
    });
  }

  /**
   * User clicked to dismiss this form.
   */
  onDismiss = () => {
    const { onDismissed } = this.props;
    const { score } = this.state;

    this.setState({
      dismissed: true
    }, () => {
      onDismissed({ score });
    });
  }

  render() {
    const { service, children, message } = this.props;
    const { dismissed, score } = this.state;

    let npsMessage = message ? message : 'How likely are you to recommend us to your friends and colleagues?'

    if (dismissed) {
      return null;
    }

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.inner)}>
          <p className={css(styles.message)}>
            { npsMessage }
          </p>
          <NPSScale onSubmit={this.onSubmit} score={score} />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  message: {
    margin: 0,
    marginBottom: 15,
    fontSize: 16,
  },
  inner: {
    width: '100%',
    maxWidth: 450,
    margin: '20px auto',
    textAlign: 'center',
  }
})

export default NPSInput;
