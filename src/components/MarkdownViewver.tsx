import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

interface MarkdownViewerProps {
    markdown: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ markdown }) => {
    const [htmlContent, setHtmlContent] = useState<string>('');

    useEffect(() => {
        const getHtmlContent = async () => {
            const html = await marked(markdown);
            setHtmlContent(html);
        };
        getHtmlContent();
    }, [markdown]);

    return (
        <div
            className="markdown-body"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
    );
};

export default MarkdownViewer;
