import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const MIN = 0;
const MAX = 10;

/**
 * Scale to select NPS value.
 * @param {ReactClass}
 */
class NPSScale extends React.Component {
  state = {
    value: this.props.score,
    valueChosen: null,
  }

  onMouseEnter(value) {
    this.setState({
      value
    });
  }

  onMouseLeave(value) {
    if (this.state.valueChosen === null) {
      this.setState({
        value: null
      });
    } else {
      this.setState({
        value: this.state.valueChosen,
      })
    }
  }

  onSelect(value) {
    const { onSubmit } = this.props;
    onSubmit(value);
    this.setState({
      valueChosen: value,
    })
  }

  render() {
    const { value } = this.state;
    
    return (
      <div className={css(styles.container)}>
        <div className="NPSScale-Values">
          {range(MIN, MAX).map(i => (
            <div
              key={i}
              className={css(styles.npsValueContainer, (value !== null && (value >= i)) && styles.selected)}
              onMouseEnter={() => this.onMouseEnter(i)}
              onMouseLeave={() => this.onMouseLeave(i)}
              onClick={() => this.onSelect(i)}
            >
              <div className={css(styles.npsValue, (value !== null && (value >= i)) && styles.valueSelected)}>{i}</div>
            </div>
          ))}
        </div>
        <div className={css(styles.legend)}>
          <div className={css(styles.label, styles.left)}>
            Not at all likely
          </div>
          <div className={css(styles.label, styles.right)}>
            Extremely likely
          </div>
        </div>
      </div>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: '0px auto',
  },
  npsValue: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: '0.15s ease all',
    color: '#999',
  },
  npsValueContainer: {
    margin: '0px 3px',
    display: 'inline-block',
    position: 'relative',
    width: 32,
    height: 32,
    borderRadius: 16,
    cursor: 'pointer',
    background: '#f2f5fd',
    transition: '0.15s ease all',
  },
  selected: {
    background: '#3884ff'
  },
  valueSelected: {
    color: '#fff',
  },
  legend: {
    display: 'flex',
    marginTop: 12,
  },
  label: {
    flex: 1,
    color: '#999',
    fontSize: 12,
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  }
})

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx);
}

export default NPSScale;