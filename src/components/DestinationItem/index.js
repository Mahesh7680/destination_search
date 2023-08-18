const DestinationItem = props => {
  const {initialData} = props
  const {name, imgUrl} = initialData
  return (
    <div>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default DestinationItem
