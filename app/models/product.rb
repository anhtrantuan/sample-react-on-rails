class Product < ApplicationRecord
  before_validation :generate_barcode

  validates :barcode, presence: true, uniqueness: true
  validates :name, presence: true

  private

  def generate_barcode
    self.barcode = SecureRandom.uuid
  end
end
