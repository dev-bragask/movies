function ListItem({url, imageUrl, alt}) {
  return (
    <li>
      <a target="_blank" rel="noreferrer" href={url}>
        <img src={imageUrl} alt={alt} />
      </a>
    </li>
  )
}

export default ListItem;