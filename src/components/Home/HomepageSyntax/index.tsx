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
        <div className="flex lg:flex-row flex-col">
          <div className='items-start lg:w-1/2 w-full'>
            <Tag title='DO NOT REPEAT YOUR SELF!'  className={'[&>div>span]:text-[15px] [&>div]:px-[13px] mb-5'}/>
            <h2 className='text-gray-900'>{props.title}</h2>
            <p className='text-gray-500'>{props.description}</p>
            <Link className={'text-secondary-500 underline flex my-auto items-center hover:!text-gray-900 w-fit'} href='/docs'>Read Docs
            <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
         
        <div className="py-3 lg:w-1/2 w-full px-4">
          <CodeDisplay
            codeString={props.sampleCode}
            language="typescript"
            theme="dark"
          />
        </div>
        </div>
      </div>
    </section>
  );
}
