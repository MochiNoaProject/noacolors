import { css } from "@emotion/core"
import { useCopyClipboard } from "../hooks/useCopyClipboard"
import Color from "color"
import React, { useRef } from "react"

const Legend: React.FC<{ color: string }> = ({ color, children }) => {
    const ref = useRef<HTMLInputElement>(null)
    const [isCopied, setCopied] = useCopyClipboard(color, { successDuration: 1000 })
    return (
        <fieldset
            css={css`
                text-align: center;
                border: none;
            `}
        >
            <div
                onClick={setCopied}
                css={css`
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100px;
                    height: 100px;
                    color: ${Color(color).isLight() ? "#424242" : "#EDEDED"};
                    cursor: pointer;
                    user-select: none;
                    background-color: ${color};
                    border-radius: 50%;
                    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14),
                        0px 3px 3px -2px rgba(0, 0, 0, 0.12);

                    transition: 0.3s;

                    & input {
                        position: absolute;
                        z-index: -1;
                        opacity: 0;
                    }
                    &:hover {
                        box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14),
                            0px 2px 16px 1px rgba(0, 0, 0, 0.12);
                    }
                `}
            >
                <input type="text" value={color} ref={ref} readOnly />
                {isCopied ? "Copied!" : children}
            </div>
            <label
                css={css`
                    font-size: 10px;
                `}
            >
                {Color(color).toString()}
            </label>
        </fieldset>
    )
}

const Column: React.FC = ({ children }) => {
    return (
        <div
            css={css`
                max-width: 800px;
                padding: 20px;
                margin: auto;
            `}
        >
            {children}
        </div>
    )
}

const Row: React.FC = ({ children }) => {
    return (
        <div
            css={css`
                display: flex;
                flex-wrap: wrap;
                margin: -5px;
                & > * {
                    margin: 5px;
                }
            `}
        >
            {children}
        </div>
    )
}

const IndexPage: React.FC = () => {
    return (
        <Column>
            <p>テーマ</p>
            <Row>
                <Legend color="#FFDF6B">薄黄</Legend>
                <Legend color="#FFCC2A">濃黄</Legend>
                <Legend color="#EE9B44">橙</Legend>
                <Legend color="#7FEE46">葉</Legend>
            </Row>
            <p>顔</p>
            <Row>
                <Legend color="#FFDECE">髪上</Legend>
                <Legend color="#FFF7E2">髪光</Legend>
                <Legend color="#FFC3AB">髪下</Legend>
                <Legend color="#FFF9F1">肌</Legend>
                <Legend color="#6F374B">眉</Legend>
                <Legend color="#1D6057">瞳奥</Legend>
                <Legend color="#ADFFD1">瞳前</Legend>
                <Legend color="#F2FFD8">瞳光</Legend>
                <Legend color="#FFE3DA">頬</Legend>
            </Row>
            <p>制服</p>
            <Row>
                <Legend color="#FFF7FF">襟</Legend>
                <Legend color="#826B71">セーター</Legend>
                <Legend color="#E95A51">リボン</Legend>
                <Legend color="#5E5A77">スカート</Legend>
                <Legend color="#9F7E7C">ソックス</Legend>
                <Legend color="#67413C">ローファー</Legend>
            </Row>
            <p>お姉さん</p>
            <Row>
                <Legend color="#797672">ワンピ</Legend>
                <Legend color="#32312F">花模様</Legend>
                <Legend color="#EEB1B2">セーター</Legend>
                <Legend color="#353033">スカート</Legend>
                <Legend color="#9F7E7C">ソックス</Legend>
                <Legend color="#322D30">ブーツ</Legend>
            </Row>
            <p>メイド</p>
            <Row>
                <Legend color="#FCAF4B">花濃</Legend>
                <Legend color="#FFE14F">花薄</Legend>
                <Legend color="#353331">黒地</Legend>
                <Legend color="#FEFEFE">白地</Legend>
            </Row>
        </Column>
    )
}

export default IndexPage
