// export function colored(BaseComponent, color) {
//   function EnhancedComponent(props) {
//     return (
//       <div style={{color: color}}>
//         <BaseComponent {...props} />
//       </div>
//     );
//   }

//   EnhancedComponent.displayName = `Colored(${BaseComponent.displayName ?? BaseComponent.name})`

//   return EnhancedComponent;
// }

export function colored2(BaseComponent) {
  function EnhancedComponent(props) {
    const { color, ...baseProps } = props

    return (
      <div style={{ color: color }}>
        <BaseComponent {...baseProps} />
      </div>
    );
  }

  EnhancedComponent.displayName = `Colored(${
    BaseComponent.displayName ?? BaseComponent.name
  })`;

  return EnhancedComponent;
}
