import {Picker,List} from 'jw-components-mobile';
import React,{PropType,Component} from 'react';
import { createForm } from 'rc-form';

class Area extends Component {
  onChange(value,schema){
    this.props.onChange(value,schema);
    let propsSchema = this.props.schema;
    if(propsSchema['events'] && propsSchema['events']['onChange']){
			propsSchema['events']['onChange'].call(this,arguments);
		}
  }
  getLabel(txt){
    if(txt){
      return <div className="label ant-form-item-label" dangerouslySetInnerHTML={{__html:txt}}></div>
    }else{
      return ''
    }
  }
  render(){
    let schema = this.props.schema;
    let self = this;
    let target = <Picker {...schema["attr"]} {...schema['events']} data={schema.options} onChange={(value)=>this.onChange(value,schema)} value={schema.defaultValue}>
                  <List.Item arrow="horizontal"></List.Item>
                </Picker>;

    if(schema["other"] && schema["other"]['template']){
      let Template = schema["other"]['template']
      target = <div className="Form-item-c">
                <Template children={target} target={self} changeData={self.props.changeData} changeSchemas={self.props.changeSchemas}></Template>
              </div>
    }else{
      target = <div className="Form-item-c">{target}</div>
    }
    return (
        <div className="Form-item-w " ref="container">
          {this.getLabel(schema.label)}
          {target}
        </div>
    )
  }
}
export default Area;