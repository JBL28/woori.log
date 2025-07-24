import MDEditor from '@uiw/react-md-editor';

const MDView = ({Document}) => {
    console.log(Document)
    return (
        <MDEditor.Markdown source={Document} style={{ whiteSpace: 'pre-wrap' }} />
    );
}

export default MDView;