import { Component, useState } from 'react';
import { colored } from '../hocs/colored';
import { colored2 } from '../hocs/colored2';
import { hideable } from '../hocs/hideable';
import TodoCount from '../todos/components/TodoCount/TodoCount';
import Clock from './Clock/Clock';
import Hideable from './Hideable';
import HideableWithTransfer from './HideableWithTransfer';
import List from './List';
import Select from './Select/Select';
import SelectBonus from './Select/SelectBonus';
import SelectHook from './Select/SelectHook';

const HideableTodoCount = hideable(TodoCount);
const HideableClock = hideable(Clock);

// Ex 2.1
const red = colored('red');
const blue = colored('blue');

const BlueClock = blue(Clock);
const RedClock = red(Clock);
const BlueTodoCount = blue(TodoCount)
const RedTodoCount = red(TodoCount);

// <BlueClock /> <-- horloge avec le texte bleu
// <RedClock /> <-- horloge avec le texte rouge

// Ex 2.2
const ColoredClock = colored2(Clock);
const ColoredTodoCount = colored2(TodoCount);

// <ColoredClock color="blue" /> <-- horloge avec le texte bleu
// <ColoredClock color="red" /> <-- horloge avec le texte rouge


export default function Home({ location }) {
  console.log(location.pathname);

  const [name, setName] = useState('Romain');

  return (
    <div className="Home">
      <h2>Composants existants</h2>
      <Clock />
      <TodoCount count={10} defaultShow={false} />

      <h2>Composants enrichis avec HOC</h2>
      <HideableClock />
      <HideableTodoCount count={10} defaultShow={false} />

      <h2>Composants enrichis avec de la composition</h2>
      <Hideable>
        <Clock />
      </Hideable>

      <Hideable>
        <TodoCount count={10} defaultShow={false} />
      </Hideable>

      <h2>
        Composants enrichis avec RenderProps et une info qui vient du parent
      </h2>
      <HideableWithTransfer>
        {(show) => (
          <>
            {show ? 'Clock should be displayed' : 'Clock should be hidden'}
            <Clock />
          </>
        )}
      </HideableWithTransfer>

      <HideableWithTransfer>
        {(show) => (
          <>
            {show ? 'Clock should be displayed' : 'Clock should be hidden'}
            <TodoCount count={10} defaultShow={false} />
          </>
        )}
      </HideableWithTransfer>

      {/* <h2>Composants enrichis avec RenderProps (avec les props)</h2>
      <Hideable component={Clock} />
      <Hideable component={TodoCount} count={10} defaultShow={false} /> */}

      <h2>RenderProps avec les listes</h2>
      <List
        items={['Item 1', 'Item 2', 'Item 3']}
        renderItem={(item) => (item === 'Item 2' ? <b>{item}</b> : item)}
      />

      <h2>Exercices</h2>
      <Select
        items={['Romain', 'Jean', 'Eric']}
        selected={name}
        onSelected={(item) => setName(item)}
        renderSelected={() => <b>{name}</b>}
        renderItem={(item) => (item === name ? <i>{item}</i> : item)}
      />
      <SelectBonus
        items={['Romain', 'Jean', 'Eric']}
        selected={name}
        onSelected={(item) => setName(item)}
        renderSelected={() => <b>{name}</b>}
        renderItem={Item}
      />
      <p>Vous avez sélectionné : {name}</p>

      <h2>Exercice 2 HOC</h2>
      <BlueClock />
      <RedClock />
      <BlueTodoCount count={10} />
      <RedTodoCount count={10} />

      <ColoredClock color="blue" />
      <ColoredClock color="red" />
      <ColoredTodoCount count={10} color="blue" />
      <ColoredTodoCount count={10} color="red" />

      <SelectHook
        items={['Romain', 'Jean', 'Eric']}
        selected={name}
        onSelected={(item) => setName(item)}
        renderSelected={() => <b>{name}</b>}
        renderItem={(item) => (item === name ? <i>{item}</i> : item)}
      />
    </div>
  );
}

// function Item(props) {
//   return <i>{props.children}</i>
// }

class Item extends Component {
  render() {
    return <i onClick={this.props.onClick}>{this.props.children}</i>
  }
}
