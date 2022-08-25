import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
  
  const StarRating = ({rating}) => {
    const stars = []
    for (let i = 1; i <= 5; i++){
        if (i <= rating) {
            stars.push(<StarIcon fontSize="small" color="primary" key={i} />)
        } else {
            stars.push(<StarBorderIcon fontSize="small" color="primary" key={i} />)
        }
    }
    return (
      <div>
        {stars}
      </div>
    );
  }
  
  export default StarRating;