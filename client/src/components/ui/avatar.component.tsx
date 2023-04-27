export const Avatar=(props:{name:string})=>{
    return           <div className="avatar placeholder">
    <div className="bg-neutral-focus text-neutral-content pt-1 rounded-full w-10">
      <span className="text-xl">{props.name.substring(0,1).toUpperCase()}</span>
    </div>
  </div> 
}