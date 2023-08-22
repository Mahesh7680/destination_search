const DestinationItem = props => {
  const {initialData} = props
  const {name, imgUrl} = initialData
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
