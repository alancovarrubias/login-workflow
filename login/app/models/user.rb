class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  has_secure_password
  def self.authenticate(username, password)
  end
end
