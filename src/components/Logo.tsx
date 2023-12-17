import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex w-full cursor-pointer justify-start px-4 items-center h-16  ">
      {/* <svg */}
      {/*   xmlns="http://www.w3.org/2000/svg" */}
      {/*   xmlnsXlink="http://www.w3.org/1999/xlink" */}
      {/*   fill="white" */}
      {/*   version="1.1" */}
      {/*   id="Capa_1" */}
      {/*   className="sm:w-12 sm:h-12 mr-3" */}
      {/*   viewBox="0 0 444.185 444.184" */}
      {/*   xmlSpace="preserve" */}
      {/* > */}
      {/*   <style */}
      {/*     className="adjust-screen-brightness" */}
      {/*     media="screen" */}
      {/*     dangerouslySetInnerHTML={{ __html: "" }} */}
      {/*   /> */}
      {/*   <g> */}
      {/*     <g> */}
      {/*       <path d="M404.198,205.738c-0.917-0.656-2.096-0.83-3.165-0.467c0,0-119.009,40.477-122.261,41.598    c-2.725,0.938-4.487-1.42-4.487-1.42l-37.448-46.254c-0.935-1.154-2.492-1.592-3.89-1.098c-1.396,0.494-2.332,1.816-2.332,3.299    v167.891c0,1.168,0.583,2.26,1.556,2.91c0.584,0.391,1.263,0.59,1.945,0.59c0.451,0,0.906-0.088,1.336-0.267l168.045-69.438    c1.31-0.541,2.163-1.818,2.163-3.234v-91.266C405.66,207.456,405.116,206.397,404.198,205.738z" /> */}
      {/*       <path d="M443.487,168.221l-32.07-42.859c-0.46-0.615-1.111-1.061-1.852-1.27L223.141,71.456c-0.622-0.176-1.465-0.125-2.096,0.049    L34.62,124.141c-0.739,0.209-1.391,0.654-1.851,1.27L0.698,168.271c-0.672,0.898-0.872,2.063-0.541,3.133    c0.332,1.07,1.157,1.918,2.219,2.279l157.639,53.502c0.369,0.125,0.749,0.187,1.125,0.187c1.035,0,2.041-0.462,2.718-1.296    l44.128-54.391l13.082,3.6c0.607,0.168,1.249,0.168,1.857,0v-0.008c0.064-0.016,0.13-0.023,0.192-0.041l13.082-3.6l44.129,54.391    c0.677,0.834,1.683,1.295,2.718,1.295c0.376,0,0.756-0.061,1.125-0.186l157.639-53.502c1.062-0.361,1.887-1.209,2.219-2.279    C444.359,170.283,444.159,169.119,443.487,168.221z M222.192,160.381L88.501,123.856l133.691-37.527l133.494,37.479    L222.192,160.381z" /> */}
      {/*       <path d="M211.238,198.147c-1.396-0.494-2.955-0.057-3.889,1.098L169.901,245.5c0,0-1.764,2.356-4.488,1.42    c-3.252-1.121-122.26-41.598-122.26-41.598c-1.07-0.363-2.248-0.189-3.165,0.467c-0.918,0.658-1.462,1.717-1.462,2.846v91.267    c0,1.416,0.854,2.692,2.163,3.233l168.044,69.438c0.43,0.178,0.885,0.266,1.336,0.266c0.684,0,1.362-0.199,1.946-0.59    c0.972-0.65,1.555-1.742,1.555-2.91V201.445C213.57,199.963,212.635,198.641,211.238,198.147z" /> */}
      {/*     </g> */}
      {/*   </g> */}
      {/* </svg> */}
      <span className="sm:text-xl whitespace-nowrap text-base font-bold">Sales Dashboard</span>
    </Link>
  )
}
