module RspecExtensions
  def mock_class(class_name)
    return class_double(class_name).
      as_stubbed_const(transfer_nested_constants: true)
  end
end