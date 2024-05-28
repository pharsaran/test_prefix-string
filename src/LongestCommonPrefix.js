import React from 'react';

class LongestCommonPrefix extends React.Component {
    longestCommonPrefix = (strs) => {
        if (!strs || strs.length === 0) {
            return "";
        }

        let prefix = strs[0];
        for (let i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) !== 0) {
                prefix = prefix.substring(0, prefix.length - 1);
                if (prefix === "") return "";
            }
        }
        return prefix;
    }

    render() {
        const { strings } = this.props;
        const result = this.longestCommonPrefix(strings);

        return (
            <div>
                <h2>ผลลัพธ์:</h2>
                <p>{result ? result : "ไม่พบข้อมูลที่ค้นหา"}</p>
            </div>
        );
    }
}

export default LongestCommonPrefix;
