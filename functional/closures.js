const auditProps = {
  creeatedAt: { default new Date },
  updatedAt:  { default new Date },
}

const Model = (defaultProps) => {
  return (name, props) => {
    const schema = moongose.schema({
      ...defaultProps,
      ...props,
    });
    return moongose.model(name, schema);
  }
}

export const withAudit = Model(auditProps);

// In other file...

withAudit('Product', {
  name: String,
  desc: String
})
