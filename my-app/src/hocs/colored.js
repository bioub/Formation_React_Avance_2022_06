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


export function colored(color) {
  return (BaseComponent) => {
    function EnhancedComponent(props) {
      return (
        <div style={{color: color}}>
          <BaseComponent {...props} />
        </div>
      );
    }

    EnhancedComponent.displayName = `Colored(${BaseComponent.displayName ?? BaseComponent.name})`

    return EnhancedComponent;
  }
}
