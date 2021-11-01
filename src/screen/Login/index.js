import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { constants } from '../../configs';

const { Title } = Typography;
const { textConst: text } = constants;

export default function Login() {
    return (
        <form>
            <div className="form-inner">
                <h2>Đăng nhập</h2>
                <div className="form-group"></div>
                <Row justify="center" style={{ height: 800 }}>
                    <Col span={8}>
                        <input placeholder={text.USERNAME}></input>
                    </Col>
                    <Col span={8}>
                        <input placeholder={text.PASSWORD}></input>
                    </Col>
                    <Col span={8}>
                        <Button>{text.LOGIN}</Button>
                    </Col>
                </Row>
            </div>
        </form>
    );
}
