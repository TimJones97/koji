import useScript from '../hooks/useScript';

const MyComponent = props => {
  useScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js');
  useScript('https://cdnjs.cloudflare.com/ajax/libs/velocity/1.5.2/velocity.min.js');
  useScript('https://cdnjs.cloudflare.com/ajax/libs/pagePiling.js/1.5.6/jquery.pagepiling.min.js');
  useScript('https://cdnjs.cloudflare.com/ajax/libs/pagePiling.js/1.5.6/jquery.pagepiling.min.js');


    {/*<!-- PagePiling.js -->*/}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pagePiling.js/1.5.6/jquery.pagepiling.min.js" integrity="sha512-FcXc9c211aHVJEHxoj2fNFeT8+wUESf/4mUDIR7c31ccLF3Y6m+n+Wsoq4dp2sCnEEDVmjhuXX6TfYNJO6AG6A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    {/*<!-- Local Scripts -->*/}
    <script type="text/javascript" src="./files/js/script.js">
  // rest of your component
}

export default useScript;
