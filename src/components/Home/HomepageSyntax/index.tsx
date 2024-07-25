import { IconDefinition, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CodeDisplay from '../../SyntaxHighlighter/CodeDisplay';
import Tag from '../../Tag';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type SyntaxItem = {
  title: string;
  description:string;
  svg?: IconDefinition;
  sampleCode:string;
};


export default function HomepageSyntax( props : SyntaxItem): JSX.Element {
  return (
    <section >
      <div className="container w-full ">
        <div className="flex lg:flex-row flex-col bg-[#cd3234] rounded-lg">
          <div className='items-start lg:w-1/2 w-full  m-auto pl-7'>
            <Tag title='DO NOT REPEAT YOUR SELF!'  className={'[&>div>span]:text-[13px] [&>div]:px-[13px] mb-4'}/>
            <h1 className='text-white'>{props.title}</h1>
            <p className='text-white'>{props.description}</p>
            <Link className={'text-gray-600 underline flex my-auto items-center hover:!text-gray-900 w-fit'} href='/docs'>Read Docs
            <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
         
        <div className="py-3 lg:w-1/2 w-full px-4 bg-[#cd3234] rounded-lg">
          <img src="/img/banner.png" className="w-full" alt="logo-ton" />
        </div>
       
        </div> 
        <div className="mt-[68px]  w-full ">
          <CodeDisplay
            codeString={props.sampleCode}
            language="typescript"
            theme="dark"
          />
        </div>
      </div>
    </section>
  );
}
