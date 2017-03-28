export const RecipeListItem = ({callback, name, link, image, author}) => {
  return (
    <div>
      <a href={link}>
        <div>
          {name} 
        </div>
        <div>
          {author}
        </div>
      </a>
    </div>
  )
}