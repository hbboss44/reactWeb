import '../project/alert.css'


const Alert = ({userName}) => {
    return ( <>
        <div class="alert alert-warning alert-dismissible fade show slide-in" role="alert">
  <strong>Hello {userName}</strong> We have received your message and we'll get back to you shortly. Thanks!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    </> );
}
 
export default Alert;