# Exercises

## Render Props

Dans le dossier `src/components` modifier le code de `Select` pour qu'il recoive 2 props : `renderSelected` et `renderItem`

Ces 2 props sont des fonctions de rendu (render props) qui recoivent un string en entrée et retourne un élément React.

Ces 2 props doivent être optionnelles.

Si elles ne sont pas reçues du composant parent on garde le rendu actuel (`<div className={styles.selected}>{selected}</div>` pour selected, `<div key={item} onClick={() => onSelected(item)}>{item}</div>` pour item)

Si elles sont reçues du composant parent appeler les fonctions pour afficher le rendu (par exemple dans une balise `<b>`)


Bonus : mettre à jour `renderItem` dans `Select` de sorte qu'un composant `Item` puisse être reçu à la place de `<div>` dans `Select` : `<Item key={item} onClick={() => onSelected(item)}>{item}</Item>`

## Higher Order Component

Créer un nouveau HOC appelé `colored`

Il recevra 2 paramètres :
- le composant à enrichir
- une couleur au format CSS (ex : `blue`,` #0000FF`, `rgb(0, 0, 255)`)

Dans le rendu du Higher Order Component, créer une div comme ceci :

```
return (
  <div style={{color: color}}>
    <BaseComponent />
  </div>
);
```

(`BaseComponent` étant le premier param du HOC, `color` le 2nd)

Editer ce JSX de sorte que `BaseComponent` recoivent ses props.

Dans `Home.js`, générer un composant `BlueClock` et `RedClock` en utilisant le HOC `colored` et utilisez les.

Bonus : améliorer `colored` de sorte qu'il reçoit la couleur via les props du composant enrichi et non via la fonctio `colored`. Remplacer `BlueClock` et `RedClock` par un seul composant `ColoredClock` et utilisez le comme ceci : `<ColoredClock color="red" />`

## Hooks

Reprendre le code de Select et le traduire en function component avec les hooks : `useState`, `useEffect` et `useRef`.
