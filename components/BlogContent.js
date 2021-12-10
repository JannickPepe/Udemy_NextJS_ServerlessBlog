
import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from '../components/HighlightCode';
import { urlFor } from 'lib/api';

// make the object serializers where we will define types with the code prop and return the variables
const serializers = {
    types: {
        // the code method will have the 3x given variables and it will be returned in the different props
        code: ({node: {language, code, filename}}) => {
            return (
            <HighlightCode language={language}>
                {code}
                <div className="code-filename">{filename}</div>
            </HighlightCode>
            )
        },
        image: ({node: {asset, alt, position = 'center'}}) => {
            debugger
            return (
                <div className={`blog-image blog-image-${position}`}>
                    <img src={urlFor(asset).height(300).fit('max').url()} />
                    <div className="image-alt">{alt}</div>
                </div>
            )
        }
    }
}

//
const BlogContent = ({content}) =>
    <BlockContent
        serializers={serializers}
        blocks={content}
    />

export default BlogContent;