import { useState } from 'react';
import { hideable } from '../hocs/hideable';
import TodoCount from '../todos/components/TodoCount/TodoCount';
import Clock from './Clock/Clock';
import Hideable from './Hideable';
import HideableWithTransfer from './HideableWithTransfer';
import List from './List';
import Select from './Select/Select';

const HideableTodoCount = hideable(TodoCount);
const HideableClock = hideable(Clock);

export default function Home() {
  const [name, setName] = useState('Romain');

  return (
    <div className="Home">
      <h2>Composants existants</h2>
      <Clock />
      <TodoCount count={10} defaultShow={false} />

      <h2>Composants enrichis avec HOC</h2>
      <HideableClock />
      <HideableTodoCount count={10} defaultShow={false} />

      <h2>Composants enrichis avec RenderProps</h2>
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
          <div>
            {show ? 'Clock should be displayed' : 'Clock should be hidden'}
            <Clock />
          </div>
        )}
      </HideableWithTransfer>

      <HideableWithTransfer>
        {(show) => (
          <div>
            {show ? 'Clock should be displayed' : 'Clock should be hidden'}
            <TodoCount count={10} defaultShow={false} />
          </div>
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
      <Select items={['Romain', 'Jean', 'Eric']} selected={name} onSelected={(item) => setName(item)} />
    </div>
  );
}
