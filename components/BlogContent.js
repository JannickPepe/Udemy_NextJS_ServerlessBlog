
import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from '../components/HighlightCode';


// make the object serializers where we will define types with the code prop and return the variables
const serializers = {
    types: {
        // the code method will have the 3x given vaiables and it will be returned in the different props
        code: ({node: {language, code, filename}}) => {
            return (
            <HighlightCode language={language}>
                {code}
                <div className="code-filename">{filename}</div>
            </HighlightCode>
            )
        }
    }
}

//
const BlogContent = ({content}) =>
    <BlockContent
        imageOptions={{w: 320, h: 240, fit: 'max'}}
        serializers={serializers}
        blocks={content}
    />

export default BlogContent;